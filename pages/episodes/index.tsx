import {API} from "assets/api/api";
import {EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Card} from "components/Card/Card";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";



export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            episodes,
        }
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {
    const {episodes} = props
    const episodesLists = episodes.results.map(episode => {
        return (
            <Card key={episode.id} name={episode.name}/>
        )
    })
    return (
        <PageWrapper>
            {episodesLists}
        </PageWrapper>
    )
}

Episodes.getLayout = getLayout;
export default Episodes;