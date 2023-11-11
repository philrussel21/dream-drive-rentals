import type {NextApiRequest} from 'next';
import axios from 'axios';
import recaptcha from '@app/integrations/google-recaptcha';
import {NextResponse} from 'next/server';

type RecaptchaPayload = {
	token: string;
};

type RecaptchaServerResponse = {
	success: boolean;
};

const POST = async (request: NextApiRequest): Promise<NextResponse> => {
	try {
		const payload = request.body as RecaptchaPayload;

		const recaptchaResponse = await axios<RecaptchaServerResponse>({
			url: recaptcha.verificationBaseUrl,
			method: 'POST',
			params: {
				secret: recaptcha.secretKey,
				response: payload.token,
			},
		});

		if (!recaptchaResponse.data.success) {
			return NextResponse.json({success: false}, {status: 400});
		}

		return NextResponse.json({success: true}, {status: 200});
	} catch (error: unknown) {
		return NextResponse.json({success: false, error}, {status: 400});
	}
};

export {
	POST,
};
