import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import {
    collection,
    getFirestore,
    query,
    getDocs,
    where,
} from "firebase/firestore"
import "./ItemListContainer.css"

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [loanding, setLoanding] = useState(true)

    const { idCategoria } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, "items"))
        const queryFilter = idCategoria ? query(queryCollection, where("category", "==", idCategoria)) : queryCollection
        getDocs(queryFilter)
            .then((resp) =>
                setProductos(
                    resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                )
            )
            .catch((err) => err)
            .finally(() => setLoanding(false))
    }, [idCategoria])
    return (
        <center>
            <div className="container-md">
                <div className="row">
                    <h1>{greeting}</h1>
                </div>
                <div className="row">
                    {loanding ? (
                        <div className="col mt-5">
                            <div className="spinner-border text-primary " role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <ItemList productos={productos} />
                    )}
                </div>
            </div>
        </center>
    )
}

export default ItemListContainer
