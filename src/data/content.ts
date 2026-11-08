export const VIDEOS = [
	{
		id: 'nuevo-trailer',
		title: 'New Trailer',
		base: 'galeria-ninjas-01',
		alt: 'Frame from the new trailer of Spider-Man: Brand New Day'
	},
	{
		id: 'trailer-oficial',
		title: 'Official Trailer',
		base: 'galeria-reflection',
		alt: 'Frame from the official trailer of Spider-Man: Brand New Day'
	},
	{
		id: 'trailer-final',
		title: 'Final Trailer',
		base: 'galeria-ninjas-02',
		alt: 'Frame from the final trailer of Spider-Man: Brand New Day'
	}
] as const;

export const GALLERY_IMAGES = [
	{
		id: 'ninjas-01',
		base: 'galeria-ninjas-01',
		alt: 'Spider-Man leaps over a group of ninjas dressed in red on the rooftops of New York'
	},
	{
		id: 'reflection',
		base: 'galeria-reflection',
		alt: 'Close-up of the Spider-Man mask with the New York skyline reflected in its eyes'
	},
	{
		id: 'ninjas-02',
		base: 'galeria-ninjas-02',
		alt: 'Spider-Man leaps between skyscrapers at sunset with the Brand New Day title'
	}
] as const;

export const SINOPSIS = `Following the massive global success of Spider-Man: No Way Home, Spider-Man: Brand New Day marks an entirely new chapter for Peter Parker and Spider-Man. Four years have passed since the events of No Way Home, and Peter Parker is now an adult living completely alone, having voluntarily vanished from the lives and memories of those he loves. Fighting crime in a New York that no longer knows his name, he has devoted himself entirely to protecting his city—a full-time Spider-Man—but as the demands on him grow, the pressure triggers a surprising physical evolution that threatens his existence, just as a strange new pattern of crimes gives rise to one of the most powerful threats he has ever faced.`;

export const FICHA = [
	{ titulo: 'Directed by', valor: 'Destin Daniel Cretton' },
	{ titulo: 'Written by', valor: 'Destin Daniel Cretton' }
] as const;

/**
 * Reparto y equipo técnico. Los datos son estáticos y las fotos están servidas
 * desde `src/assets/images/reparto/` (`slug`.jpg + `slug`.webp), sin llamadas a la API.
 */
export const CAST = [
	{ name: 'Tom Holland', role: 'Peter Parker / Spider-Man', slug: 'tom-holland' },
	{ name: 'Zendaya', role: 'MJ', slug: 'zendaya' },
	{ name: 'Mark Ruffalo', role: 'Bruce Banner / Hulk', slug: 'mark-ruffalo' },
	{ name: 'Jon Bernthal', role: 'Frank Castle / Punisher', slug: 'jon-bernthal' },
	{ name: 'Jacob Batalon', role: 'Ned Leeds', slug: 'jacob-batalon' },
	{ name: 'Sadie Sink', role: 'Jean Grey', slug: 'sadie-sink' },
	{ name: 'Florence Pugh', role: 'Yelena Belova / Black Widow', slug: 'florence-pugh' },
	{ name: 'Liza Colón-Zayas', role: 'Detective Jean DeWolff', slug: 'liza-colon-zayas' },
	{ name: 'Tramell Tillman', role: "William 'Bill' Metzger", slug: 'tramell-tillman' },
	{ name: 'Marisa Tomei', role: 'May Parker', slug: 'marisa-tomei' },
	{ name: 'Naomi Watts', role: 'E.V. (voice)', slug: 'naomi-watts' },
	{ name: 'Michael Mando', role: 'Mac Gargan / Scorpion', slug: 'michael-mando' }
] as const;

export const CREW = [
	{ name: 'Destin Daniel Cretton', role: 'Director', slug: 'destin-daniel-cretton' },
	{ name: 'Erik Sommers', role: 'Screenwriter', slug: 'erik-sommers' },
	{ name: 'Chris McKenna', role: 'Screenwriter', slug: 'chris-mckenna' },
	{ name: 'Kevin Feige', role: 'Producer', slug: 'kevin-feige' },
	{ name: 'Amy Pascal', role: 'Producer', slug: 'amy-pascal' },
	{ name: 'Avi Arad', role: 'Producer', slug: 'avi-arad' },
	{ name: 'Brett Pawlak', role: 'Director of Photography', slug: 'brett-pawlak' },
	{ name: 'Michael Giacchino', role: 'Composer', slug: 'michael-giacchino' },
	{ name: 'Nat Sanders', role: 'Editor', slug: 'nat-sanders' },
	{ name: 'Charles Wood', role: 'Production Design', slug: 'charles-wood' },
	{ name: 'Sanja Milkovic Hays', role: 'Costume Design', slug: 'sanja-milkovic-hays' },
	{ name: 'Jerome Chen', role: 'Visual Effects Supervisor', slug: 'jerome-chen' }
] as const;
