const fs = require('fs');

// If permissions are correct, this script should run
console.log('We have accessed the foreground.');

// Retrieve all img and store in array
const qsImg = document.querySelectorAll('img')  //.map((el) => el.src);
// console.log(qsImg[0], qsImg[0].height, qsImg[0].width)
const imgSrcs = [];

/*  download by params */
// pic max width max height
// pic min width min height
const maxH = 300;
const maxW = 300;
const minH = 0.5 * maxH;
const minW = 0.5 * maxW;
const maxCount = 10;
let count = 0;
for (let i = 0; i < qsImg.length; i++) {
    let currImg = qsImg[i];
    if (count < maxCount && currImg.height < maxH && currImg.width < maxW && currImg.height > minH && currImg.width > minW) {
        imgSrcs.push(currImg.src);
        count++;
    }

}
// console.log("user choice =>", imgSrcs);
/* download by selecting */
const imgSrcsSelect = [];
let countSelect = 0;
const maxSelect = 8;
while (true) {
  window.addEventListener('click', e => {
      imgSrcsSelect.push(e.target.currentSrc);
      countSelect++;
  if (countSelect > maxSelect) {
      console.log('data written????');
      fs.writeFileSync('./data/srcImags.json', imgSrcsSelect, (err) => {
        // In case of a error throw err.
        if (err) throw err;
        else break;
        );
    };
});
}



/* download by */


// chrome.storage.local.set({ 'images': imgSrcs });



