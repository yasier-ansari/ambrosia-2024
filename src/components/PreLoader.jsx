import Logo from '../assets/logo.jpg'
const PreLoader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full mx-auto min-h-screen ">
            <img src={Logo} className="w-52 h-52 object-cover rounded-full " />
        </div>
    )
}

export default PreLoader