const Layout: React.FC<any> = (props) => {
    return (
        <div>
            <header>
                <nav></nav>
            </header>
            <main>
                <aside></aside>
                <section>{props.children}</section>
            </main>
        </div>
    );
};

export default Layout;
