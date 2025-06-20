import Logo from '../assets/chef-claude-icon.png'
export default function Heder() {
    return <>
        <section className='flex justify-center items-center gap-5 shadow-md h-40'>
            <img src={Logo} alt="chef logo"/>
            <h1 className='text-5xl'>Chef Claude</h1>
        </section>
    </>
}