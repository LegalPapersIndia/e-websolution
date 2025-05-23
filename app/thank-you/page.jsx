"use client";
import CountDownRenderer from "@/components/thank-you-page";
import Countdown from "react-countdown";

function ComingSoonPage() {
	return <Countdown date="Decembar 31, 2025" renderer={CountDownRenderer} />;
}

export default ComingSoonPage;
