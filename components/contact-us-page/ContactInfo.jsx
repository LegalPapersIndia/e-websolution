import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Icon4 from "@/public/images/contact/icon8.png";
import Icon5 from "@/public/images/contact/icon7.png";
import Link from "next/link";
import Image from "next/image";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap3">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h5>Chat with us</h5>
					<p>We're waiting to help you every Monday-Saturday from 10 AM to 6 PM IST.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap3">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h5>Give us a call</h5>
					<p>Give us a ring at <Link href="tel:9354305099"><span className="contact-call-text">+91-9354305099</span></Link>. Every Monday-Saturday from 10 AM to 6 PM.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap3">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h5>Email us</h5>
					<p>Drop us an Email at <Link href="mailto:info@e-websolution.in"><span className="contact-call-text">info@e-websolution.in</span></Link> and you'll receive a reply within 24 hours.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap3">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon4} alt="Location Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h5>Corporate Office</h5>
					<p>K, 159, Gali No. 8, Samta Vihar, Mukandpur Part 2, North West, Delhi, 110042</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap3">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon5} alt="Location Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h5>Registered Office</h5>
					<p>F-2, ABL Workspace 1st Floor, Near Sector 6 Police Chowki, Sector 8 Noida, 201301</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
