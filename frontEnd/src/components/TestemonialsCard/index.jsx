import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function TestemonialsCard({name, date, content}) {

    return (
        <div className="testemonials-card-section">

            <div className="user-info">
                <img src="/img/user.png" alt="perfil" />
                <div>
                    <p className="user-name">{name}</p>
                    <p className="date-posted">{date}</p>
                </div>
            </div>

            <p>{content}</p>
        </div>
    );
}