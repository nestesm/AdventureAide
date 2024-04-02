interface Props {
    pageId: string
}

export const ReadyRouterHeader: React.FC<Props> = ({pageId}) => {
    return (<>
        <div className={'w-[100vw] h-[20vh] from-blue-500 to-amber-10 bg-gradient-to-b text-center text-5xl pt-4 font-mono'}>
            {pageId}
        </div>
    </>)
}
