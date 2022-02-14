
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting, children}) =>{
    return(
        <div className="forma">
           {greeting}
           {children}
        </div>
        
    )
}