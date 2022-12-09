const firstSelect = document.querySelector('#first-select');
const secondSelect = document.querySelector('#second-select');
const thirdSelect = document.querySelector('#third-select');
const fourthSelect = document.querySelector('#fourth-select');
const btn = document.querySelector('button');

const createDropdown = (selection, length) => {
    for ( i = 0; i <= length; i++ ) {
        const option = document.createElement('option');
        option.innerText = i;
        option.value = i;
        selection.append(option);
    }
};

const random = (array, amt) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array.slice(0, amt);
}

