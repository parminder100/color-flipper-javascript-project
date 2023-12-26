const color = ['green', 'red', 'blue', 'orange'];
const currentColor = document.querySelector(".color-value");

const handleChangeColor = () =>{
    const randomColor = Math.floor(Math.random() * color.length);
    // console.log(randomColor);
    const selectedColor = color[randomColor];
    console.log(selectedColor);

    document.querySelector(".bg-main").style.backgroundColor = selectedColor;
    currentColor.textContent = selectedColor;
}