const Footer = () => {
	return (
		<footer className="mt-32 pb-16 text-sm text-muted-foreground">
			<div className="space-y-4">
				<div className="space-y-1">
					<p>
						email ·{" "}
						<a
							href="mailto:adnan@example.com"
							className="hover:underline"
						>
							adnan@example.com
						</a>
					</p>

					<p>
						resume ·{" "}
						<a
							href="/resume"
							className="hover:underline"
						>
							adnan.dev/resume
						</a>
					</p>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
