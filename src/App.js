import React from 'react';
import './App.css';
import NewsHeader from './components/newsheader';
import NewsList from './components/newsList';
import News from './components/news'
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <NewsHeader />
                        <Route exact path="/" render={()=><NewsList />}/>
                        <Route exact path="/today" render={()=><NewsList />}/>
                        <Route exact path="/saved" render={()=><News />}/>
                        <Route path="/signin" render={()=><Authentication />}/>
                    </div>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
