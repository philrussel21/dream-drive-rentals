import {Button, Heading, Input, Text, Textarea} from '@app/components';
import {Container, Hero, Region} from '@app/components/partials';
import contactPageData from '@app/data/contact.json';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';

const ContactPage = (): JSX.Element => {
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
					<form className="w-1/2 bg-black text-white p-10 space-y-8 rounded-xl drop-shadow-2xl">
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
								placeholder="Bilbo Baggins"
							/>
						</div>
						<div>
							<Input
								required
								id="email"
								label="Email"
								type="email"
								placeholder="bilbo.baggins@shire.com"
							/>
						</div>
						<div>
							<Textarea
								required
								id="message"
								label="Tell us about it"
								rows={5}
								placeholder="Dear sirs and madams, I find myself in quite the hobbit-sized predicament! In my humble quest to Mordor, I require a magnificent carriage for the One Ring's perilous journey. Any chance you have a luxury car that can withstand fiery mountains and mischievous goblins?"
							/>
						</div>
						<div className="flex justify-center items-center">
							<Button.Semantic type="submit" label="Submit"/>
						</div>
					</form>
				</Container>
			</Region>
		</div>
	);
};

export default ContactPage;
