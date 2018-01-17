import React from 'react';
import AppBarTemplete from './AppBarTemplete';
import TabsTemplete from './TabsTemplete';
import CardTemplete from './CardTemplete';
import FloatingButtonTemplete from './FloatingButtonTemplete';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import update from 'react-addons-update';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		    open: false,
			memoItem: [],
			titleWillAdd: '',
			bodyWillAdd: ''
		}

		for(let i=0; i<5; i++) {
			this.state.memoItem.push({
				title: 'Title',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
				timeStamp: Date(),
				isFavorite: true,
				isDeleted: false,
			});	
		}
		
		this.handleTitleUpdate = this.handleTitleUpdate.bind(this)
		this.handleBodyUpdate = this.handleBodyUpdate.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleTitleUpdate(e) {
		this.setState({titleWillAdd:e.target.value});
	}

	handleBodyUpdate(e) {
		this.setState({bodyWillAdd:e.target.value});
	}

	handleOpen() {
		this.setState({open: true});
	};

	handleClose() {
		this.setState({open: false});
	};

	handleSubmit() {
	 	this.setState({
	 		memoItem: update(
	 			this.state.memoItem,
	 			{
	 				$push: [{
						title: this.state.titleWillAdd,
						body: this.state.bodyWillAdd,
						timeStamp: Date(),
						isFavorite: false,
						isDeleted: false,			
					}]
	 			}	
 			)
	 	});

		this.handleClose();

		console.log(this.state.memoItem);
	}


    render(){
    	let allTab = this.state.memoItem.map((memo, i) => {
						if(!memo.isDeleted)
						return(
							<CardTemplete 
            					memoTitle = {memo.title}
            					memoBody = {memo.body}
            					timeStamp = {memo.timeStamp}
            					isFavorite = {memo.isFavorite}
            					isDeleted = {memo.isDeleted}
            					deleteFunc = {()=>{
            							this.setState({
									 		memoItem: update(
									 			this.state.memoItem,
									 			{
													[i]: {
														isDeleted: {$set:!this.state.memoItem[i].isDeleted}
													}
									 			}	
								 			)
									 	});	
            					}}
            					key = {i}
    						/>
						);
					})
    	let favoriteTab = this.state.memoItem.map((memo, i) => {
    						if(memo.isFavorite&&!memo.isDeleted)
							return(
								<CardTemplete 
	            					memoTitle = {memo.title}
	            					memoBody = {memo.body}
	            					timeStamp = {memo.timeStamp}
	            					isFavorite = {memo.isFavorite}
	            					isDeleted = {memo.isDeleted}
	            					deleteFunc = {()=>{
	            							this.setState({
										 		memoItem: update(
										 			this.state.memoItem,
										 			{
														[i]: {
															isDeleted: {$set:!this.state.memoItem[i].isDeleted}
														}
										 			}	
									 			)
										 	});	
	            					}}
	            					key = {i}
        						/>
							);
						})

    	let deletedTab = this.state.memoItem.map((memo, i) => {
    						if(memo.isDeleted)
							return(
								<CardTemplete 
	            					memoTitle = {memo.title}
	            					memoBody = {memo.body}
	            					timeStamp = {memo.timeStamp}
	            					isFavorite = {memo.isFavorite}
	            					isDeleted = {memo.isDeleted}
	            					deleteFunc = {()=>{
	            							this.setState({
										 		memoItem: update(
										 			this.state.memoItem,
										 			{
														[i]: {
															isDeleted: {$set:!this.state.memoItem[i].isDeleted}
														}
										 			}	
									 			)
										 	});	
	            					}}
	            					key = {i}
        						/>
							);
						})
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleSubmit}
			/>,
		];

        return (
            <div>
        		<AppBarTemplete/>
        		<TabsTemplete 
        			tabAll={
        				<div>
        					{allTab}
            			</div>       			
            		}
            		tabFavorites={
            			<div>
            				{favoriteTab}
            			</div>
            		}
            		tabDeleted={
            			<div>
            				{deletedTab}
            			</div>
            		}
        		/>
        		<FloatingButtonTemplete add={this.handleOpen}/>

		      <MuiThemeProvider>
		        <div>
		          <Dialog
		            title="Add Todo"
		            actions={actions}
		            modal={false}
		            open={this.state.open}
		            onRequestClose={this.handleClose}
		            autoScrollBodyContent={true}
		          >
		            <TextField
		              hintText="Title"
		              fullWidth={true}
		              onChange={this.handleTitleUpdate}
		            /><br />
		            <TextField
		              hintText="Detail"
		              floatingLabelText="Detail"
		              multiLine={true}
		              rowsMax={5}
		              fullWidth={true}
		              onChange={this.handleBodyUpdate}
		            />                
		          </Dialog>
		        </div>
		      </MuiThemeProvider>

            </div>
        );
    }
}

export default App;