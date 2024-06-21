import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/App.module.scss';
import publishRoutes from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function App() {
    return (
        <Router basename='/' >
            <div className={cx('app')}>
                <Routes>
                    {publishRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
