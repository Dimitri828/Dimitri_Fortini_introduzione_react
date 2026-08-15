export default function Card({name,email}){
    return(
        <>
        <div className="card-body">
            <h5>Name:<span className="text-bolder">{name.toUpperCase()}</span></h5>
            <h5>Email:<span className="text-bolder">{email}</span></h5>
        </div>
        </>
    )
}