import React, { useState, useEffect } from "react";

function ColorPicker() {
const [selectedColor, setSelectedColor] = useState("");
const [colors, setColors] = useState([]);

useEffect(() => {
document.body.style.backgroundColor = selectedColor;
}, [selectedColor]);


return (
<>
<input type="color" onChange={(e) => setSelectedColor(e.target.value)} />
<button onClick={() => setColors([...colors, selectedColor])}>Add Color</button>
 {colors.map((color, index) => (
<div
 key={index}
style={{ backgroundColor: color, width: "50px", height: "50px" }}
 onClick={() => {
document.body.style.backgroundColor = color;
 setColors(colors.filter((c) => c !== color));
 }}
></div>
 ))}
</>
 );
}

export default ColorPicker;