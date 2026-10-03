// Simple, robust Markdown to HTML converter for blog articles

export function markdownToHtml(md: string): string {
  if (!md) return '';

  const lines = md.trim().split('\n');
  const output: string[] = [];
  let inList = false;
  let inTable = false;
  let tableHeaderParsed = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Check Table
    if (line.startsWith('|') && line.endsWith('|')) {
      if (inList) {
        output.push('</ul>');
        inList = false;
      }
      if (!inTable) {
        inTable = true;
        tableHeaderParsed = false;
        output.push('<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-[#e4eaf1] border border-[#e4eaf1] rounded-xl text-left text-sm bg-white shadow-xs">');
      }

      // Check separator line | :--- | :--- |
      if (line.includes('---')) {
        tableHeaderParsed = true;
        continue;
      }

      const cells = line
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());

      if (!tableHeaderParsed) {
        output.push('<thead class="bg-[#edf4ff] text-[#00327d] font-display font-bold"><tr>');
        cells.forEach((c) => {
          output.push(`<th scope="col" class="px-4 py-3.5">${formatInline(c)}</th>`);
        });
        output.push('</tr></thead><tbody class="divide-y divide-[#e4eaf1] text-[#434653]">');
      } else {
        output.push('<tr class="hover:bg-[#f7f9ff] transition-colors">');
        cells.forEach((c, idx) => {
          const isFirst = idx === 0;
          output.push(`<td class="px-4 py-3 ${isFirst ? 'font-semibold text-[#101d29]' : ''}">${formatInline(c)}</td>`);
        });
        output.push('</tr>');
      }
      continue;
    } else if (inTable) {
      output.push('</tbody></table></div>');
      inTable = false;
      tableHeaderParsed = false;
    }

    // Check Unordered List
    if (line.startsWith('- ')) {
      if (!inList) {
        output.push('<ul class="my-4 space-y-2.5 text-[#434653] list-disc list-inside">');
        inList = true;
      }
      output.push(`<li class="leading-relaxed">${formatInline(line.slice(2))}</li>`);
      continue;
    } else if (inList) {
      output.push('</ul>');
      inList = false;
    }

    // Check Headings
    if (line.startsWith('## ')) {
      const title = line.slice(3).trim();
      const id = slugify(title);
      output.push(`<h2 id="${id}" class="font-display font-bold text-2xl sm:text-3xl text-[#00327d] mt-10 mb-4 scroll-mt-24">${formatInline(title)}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      const title = line.slice(4).trim();
      const id = slugify(title);
      output.push(`<h3 id="${id}" class="font-display font-bold text-xl sm:text-2xl text-[#101d29] mt-8 mb-3 scroll-mt-24">${formatInline(title)}</h3>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const text = line.slice(2).trim();
      output.push(`<div class="border-l-4 border-[#0047ab] bg-[#edf4ff]/60 p-4 my-4 rounded-r-xl text-sm text-[#00327d] italic">${formatInline(text)}</div>`);
      continue;
    }

    // Empty line
    if (!line) {
      continue;
    }

    // Regular Paragraph
    output.push(`<p class="text-base text-[#434653] leading-relaxed my-4">${formatInline(line)}</p>`);
  }

  if (inList) output.push('</ul>');
  if (inTable) output.push('</tbody></table></div>');

  return output.join('\n');
}

function formatInline(str: string): string {
  // Bold
  let res = str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#101d29]">$1</strong>');
  // Italic
  res = res.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  // Markdown links: [text](url)
  res = res.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#0047ab] font-semibold underline hover:text-[#00327d] transition-colors">$1</a>');
  return res;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function extractHeadings(md: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const lines = md.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3).trim();
      headings.push({ id: slugify(text), text, level: 2 });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4).trim();
      headings.push({ id: slugify(text), text, level: 3 });
    }
  }
  return headings;
}
