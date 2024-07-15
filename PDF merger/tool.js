import PDFMerger from 'pdf-merger-js';
var merger = new PDFMerger();

export const mergeit=async (p1,p2) => {
  await merger.add(p1);
  await merger.add(p2);
  /*await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
  await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
  await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
  await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)
*/
  await merger.save('result/merged.pdf');
};
