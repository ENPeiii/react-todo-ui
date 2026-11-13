
import { Outlet, useMatches } from 'react-router'

type RouteHandle = { title?: string }

const MainLayout = () => {
    const matches = useMatches();
    const title = [...matches]
    .reverse()
    .map((m) => (m.handle as RouteHandle | undefined)?.title)
    .find(Boolean);

    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col p-2'>
            {title && <h1 className='text-center text-2xl mb-2'>{title}</h1>}
            <section className='w-full max-w-lg mx-auto border border-secondary rounded-2xl p-3'>
                <Outlet  />
            </section> 
        </div>
    )
}

export default MainLayout
