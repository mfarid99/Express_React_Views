const React = require("react")

const Sweet = (props) => {

    const [pic, setPic] = React.useState(<img src ="https://www.nme.com/wp-content/uploads/2018/11/rexfeatures_9707628p.jpg"/>)

    const changePic = () => {
        setPic(<img src = "https://www.antimusic.com/_img/20/October/02/IronMaiden.jpg"/>)
    }
    return (<> 
    <h1>Sweet Page</h1>
         <div>
             {props.data.map((value) =>(
               <div> <img src = {value}></img> </div>
             ))}
         </div>
         <div>{pic}</div>
         <button onClick={changePic}>Click</button>
        </>) 
}

module.exports = Sweet