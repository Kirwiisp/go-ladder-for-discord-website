import React from "react";
import WGOPlayer from "./WGOPlayer";

export default function GameViewer({game, move}) {
    switch (game.server) {
        case 'OGS':
            return <WGOPlayer sgfUrl={game.sgf} gameLink={game.gameLink} move={move}/>;

        case 'KGS':
            return <WGOPlayer sgfUrl={"https://corsproxy.io/?" + game.sgf} gameLink={game.gameLink} move={move}/>;

        default:
            return (
                <div className={'GameAccessMessage'}>
                    <p>Vous pouvez accéder à la partie <a href={game.gameLink} target='_blank' rel={'noreferrer'}>ici</a></p>
                </div>
            );
    }
}
