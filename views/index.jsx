const React = require('react')
const Other = require ('./other.jsx')

const Index = (props) => {
    return (<>
     <h1>Howdy Sir</h1>
     <h2>{props.ironman}</h2>
     <img src = "https://metalheadzone.com/wp-content/uploads/2020/02/james-hetfield-after-rehab-ron-mcgovney.jpg"/>
     <Other/>
    </>)
}


module.exports = Index