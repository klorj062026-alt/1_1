Put og Patch

Er å endre dataen. Hvorfor to navn? Fordi de endrer dataen på forskjellig måte.
Data.
{
navn:
epost:
}

Put betyr "erstatt ALT med noe nytt". Ulempen er at du må alltid endre på alt, ellers så forsvinner alt.

patch betyr å endre en key-value. F.eks bare navn:. Patch fjerner ikke data.

Patch brukes mest, men put kan også lage en hel ressurs(bytte ut all data, inkludert gammel data som du ikke trenger lenger).

// params = path parameters = api.pokemon.no/pokemon/"BULBASAUR"
// query params api.pokemon.no"?LIMIT=1000"
