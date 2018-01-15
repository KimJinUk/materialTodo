import React from 'react';
import AppBarTemplete from './AppBarTemplete';
import TabsTemplete from './TabsTemplete';
import CardTemplete from './CardTemplete';
import FloatingButtonTemplete from './FloatingButtonTemplete';

let memoItem = {
	title: 'Title',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
	timeStamp: Date(),
	isFavorite: false,
	isDeleted: false,
}


class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

    render(){
        return (
            <div>
        		<AppBarTemplete/>
        		<TabsTemplete 
        			tabAll={
        				<div>
	            			<CardTemplete 
	            					memoTitle = {memoItem.title}
	            					memoBody = {memoItem.body}
	            					timeStamp = {memoItem.timeStamp}
	            					isFavorite = {memoItem.isFavorite}
	            			/>
	            			<CardTemplete 
	            					memoTitle = {memoItem.title}
	            					memoBody = {memoItem.body}
	            					timeStamp = {memoItem.timeStamp}
	            					isFavorite = {memoItem.isFavorite}
	            			/>   
            			</div>         			
            		}
            		tabFavorites={
            			<div>
            				{memoItem.isFavorite?'1':'0'}
            			</div>
            		}
            		tabDeleted={
            			<div>
            				3
            			</div>
            		}
        		/>
        		<FloatingButtonTemplete/>
            </div>
        );
    }
}

export default App;