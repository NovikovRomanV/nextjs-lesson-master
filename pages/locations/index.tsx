import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {QueryClient, dehydrate, useQuery} from "@tanstack/react-query";
import {LocationType, ResponseType} from "assets/api/rick-and-morty-api";
import {Card} from "components/Card/Card";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";



const getLocations = () => {
    return fetch("https://rickandmortyapi.com/api/location", {
        method: "GET",
    }).then(res => res.json());
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient();

    queryClient.fetchQuery(['locations'], getLocations)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}


const Locations = () => {
    const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

    if (!locations) return null

    const locationsLists = locations.results.map(location => {
        return (
            <Card key={location.id} name={location.name}/>
        )
    })

    return (
        <PageWrapper>
            {locationsLists}
        </PageWrapper>
    )
}
Locations.getLayout = getLayout;
export default Locations;