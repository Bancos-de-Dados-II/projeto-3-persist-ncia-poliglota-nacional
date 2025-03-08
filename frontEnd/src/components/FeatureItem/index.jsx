import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function FeatureItem({iconPath, title, description}) {
    return (
        <div className="feature-item-container">
            <img src={iconPath} alt="Icone" />
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}