const recaptcha = {
	siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
	secretKey: process.env.RECAPTCHA_SECRET_KEY ?? '',
	verificationBaseUrl: 'https://www.google.com/recaptcha/api/siteverify',
};

export default recaptcha;
