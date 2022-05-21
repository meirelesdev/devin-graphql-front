import Content from '../components/content'
import Header from '../components/header'

const Layout = ({children}) => {
    console.log(children)
    return (
        <main>
            <Header />
            <Content>
                {children}
            </Content>
        </main>
    )
}
export default Layout