import sankalp from '../images/sankalp.png'
const App = () => {
    const ap = {
        id: 1,
        name: "ab",
        hobby: 'eating'
    }
    console.log(ap)
    return (
        <div>
            <div className='hero'></div>
            <h1>App</h1>yuhoo
            <img src={sankalp} alt='human'/>
        </div>
    )
}

export default App
