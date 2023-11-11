'use client';

import {Button, Heading, Input, Text, Textarea} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import recaptcha from '@app/integrations/google-recaptcha';
import contactPageData from '@app/data/contact.json';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import type {FormEvent} from 'react';
import {useCallback, useRef, useState, Fragment} from 'react';
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import {notPopulated} from '@growthops/ext-ts';
import {Dialog, Transition} from '@headlessui/react';

type APIResponse = {
	success: boolean;
};

type State = {
	hasRecaptchaPassed: boolean;
	isSubmitted: boolean;
	isProcessing: boolean;
	hasError: boolean;
};

type FormState = {
	name: string;
	email: string;
	message: string;
};

const initialState = {
	hasRecaptchaPassed: false,
	isProcessing: false,
	isSubmitted: false,
	hasError: false,
};

const initialFormState = {
	name: '',
	email: '',
	message: '',
};

const ContactPage = (): JSX.Element => {
	const recaptchaReference = useRef<ReCAPTCHA>(null);
	const [state, setState] = useState<State>(initialState);
	const [formState, setFormState] = useState<FormState>(initialFormState);

	const handleInputChange = useCallback((event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {id, value} = event.currentTarget;

		setFormState(current => ({
			...current,
			[id]: value,
		}));
	}, []);

	const handleReCaptchaChange = useCallback(() => {
		setState(current => ({
			...current,
			hasRecaptchaPassed: true,
		}));
	}, []);

	const handleCloseModal = useCallback(() => {
		setState(current => ({...current, isSubmitted: false}));
		setFormState(initialFormState);
	}, []);

	const handleSubmit = useCallback(async (event: FormEvent) => {
		event.preventDefault();

		if (!recaptchaReference.current || !state.hasRecaptchaPassed) {			
			return;
		}
		const recaptchaValue = recaptchaReference.current.getValue();

		if (notPopulated(recaptchaValue)) {
			return;
		}

		setState(current => ({
			...current,
			isProcessing: true,
		}));

		// TODO: wrap with try/catch
		const validationResponse = await axios.post<APIResponse>(
			'/api/recaptcha',
			{token: recaptchaValue},
			// eslint-disable-next-line @typescript-eslint/naming-convention
			{headers: {'Content-Type': 'application/json'}},
		);
		setState(current => ({
			...current,
			isProcessing: false,
			isSubmitted: validationResponse.data.success,
		}));
	}, [state, recaptchaReference, formState]);
	
	return (
		<div>
			<Hero title="Contact Us"/>
			<Region>
				<Container className="pb-20 flex flex-col md:flex-row md:justify-between gap-6">
					<div className="md:max-w-md text-center md:text-left space-y-4">
						<Heading
							label={contactPageData.heading}
							variant="heading-two"
							element="h2"
						/>
						<Text element="p">{contactPageData.content}</Text>
						<div className="mt-6">
							<div className="flex flex-col items-center lg:items-start space-y-4">
								<a
									href={`tel:${contactPageData.contact.phone}`}
									className="flex space-x-2"
								>
									<PhoneIcon className="w-7"/>
									<span>{contactPageData.contact.phone}</span>
								</a>
								<a
									href={`mailto:${contactPageData.contact.email}`}
									className="flex space-x-2"
								>
									<EnvelopeIcon className="w-7"/>
									<span>{contactPageData.contact.email}</span>
								</a>
								<p className="flex space-x-2">
									<MapPinIcon className="w-7"/>
									<span>{contactPageData.contact.address}</span>
								</p>
							</div>
						</div>
					</div>
					<form className="md:w-1/2 bg-black text-white p-10 space-y-8 rounded-xl drop-shadow-2xl" onSubmit={handleSubmit}>
						<Heading
							label="Get in touch with us"
							variant="heading-three"
							element="h3"
						/>
						<div>
							<Input
								required
								id="name"
								label="Name"
								type="text"
								value={formState.name}
								placeholder="Bilbo Baggins"
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<Input
								required
								id="email"
								label="Email"
								type="email"
								value={formState.email}
								placeholder="bilbo.baggins@shire.com"
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<Textarea
								required
								id="message"
								label="Tell us about it"
								rows={5}
								value={formState.message}
								placeholder="Dear sirs and madams, I find myself in quite the hobbit-sized predicament! In my humble quest to Mordor, I require a magnificent carriage for the One Ring's perilous journey. Any chance you have a luxury car that can withstand fiery mountains and mischievous goblins?"
								onChange={handleInputChange}
							/>
						</div>
						<div className="min-h-[80px]">
							<ReCAPTCHA
								ref={recaptchaReference}
								sitekey={recaptcha.siteKey}
								onChange={handleReCaptchaChange}
							/>
						</div>
						<div className="flex justify-center items-center">
							<Button.Semantic type="submit" label="Submit"/>
						</div>
					</form>
				</Container>
			</Region>
			<Transition appear show={state.isSubmitted} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25"/>
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-brand-off-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title>
										<Heading label="Thank you for reaching out!" variant="heading-three" element="h3"/>
									</Dialog.Title>
									<div className="mt-4">
										<Text variant="text-small" element="span">
											{'For immediate assistance or urgent matters, please don\'t hesitate to contact us directly via '}
										</Text>
										<a
											href={`mailto:${contactPageData.contact.email}`}
											className="text-sm hover:underline"
										>
											email.
										</a>
									</div>
									<div className="mt-8 flex justify-center">
										<Button.Semantic label="Close" onClick={handleCloseModal}/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default ContactPage;

export type {
	FormState,
};
