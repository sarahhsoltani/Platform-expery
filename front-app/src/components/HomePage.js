import React,{Component} from 'react';
import NavigationBar from '../components/Nav/NavigationBar';
import Banner from '../components/Banner/Banner';

export class HomePage extends Component{
    render()
    {
        return(
            <div>
            <NavigationBar />
            <Banner />
            

            </div>
        )
    }
}

export default HomePage ;