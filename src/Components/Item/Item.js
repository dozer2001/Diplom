



export default class BooksItem extends Component{
    DataMy = new GotItem()



    render(){

        return(
            <ItemDetails id = {this.props.bookId}
                         getData={this.gotService.getBook}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

    }
}