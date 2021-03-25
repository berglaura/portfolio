import "./style.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Ota yhteyttä!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7925.264827478821!2d25.011278998250457!3d60.22514456028387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208e3444a0ecb%3A0x2600b5523c1904f1!2sViikki%2C%2000790%20Helsinki!5e0!3m2!1sfi!2sfi!4v1616230193605!5m2!1sfi!2sfi" 
                frameborder ="0"
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>

            <h4>Puhelin</h4>
            <p>050 581 9275</p>

            <h4>Email</h4>
            <p>lauraberg78@gmail.com</p>
            
        </div>
    )
}

export default Contact
