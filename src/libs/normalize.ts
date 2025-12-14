export function normalizePersian(str: string): string {
  return str
    .replace(/[ك]/g, "ک")
    .replace(/[ي]/g, "ی")
    .replace(/[ۀ]/g, "ه")
    .replace(/[ة]/g, "ه")
    .replace(/[أإآ]/g, "ا")
    .replace(/[ؤ]/g, "و")
    .replace(/‌/g, "")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
