import { createContext, useState, useEffect } from 'react';

const MapContext = createContext();

export function MapContextProvider({children}){
    const [mapInfo, setMapInfo] = useState({
        mapTitle: '',
        fileFormat: '',
        map: null,
        download: false,
        downloadFormat: ''
    });

    // TO BE DELETED
    useEffect(() => {
        console.log(mapInfo);
    }, [mapInfo])

    const ActionType = {
        SET_MAP_TITLE: 'SET_MAP_TITLE',
        SET_FILE_FORMAT: 'SET_FILE_FORMAT',
        SET_MAP: 'SET_MAP',
        RESET: 'RESET',
        SET_DOWNLOAD_FORMAT: 'SET_DOWNLOAD_FORMAT',
        CANCEL_DOWNLOAD: 'CANCEL_DOWNLOAD',
    }

    const reducer = (action) => {
        const { type, payload } = action;

        switch(type){
            case ActionType.SET_MAP_TITLE:
                return setMapInfo((prevMapInfo) => ({
                    ...prevMapInfo,
                    mapTitle: payload
                }));
            case ActionType.SET_FILE_FORMAT:
                return setMapInfo((prevMapInfo) => ({
                    ...prevMapInfo,
                    fileFormat: payload
                }));
            case ActionType.SET_MAP:
                return setMapInfo((prevMapInfo) => ({
                    ...prevMapInfo,
                    map: payload
                }));
            case ActionType.RESET:
                return setMapInfo({
                    mapTitle: '',
                    fileFormat: '',
                    map: null,
                    download: false,
                    downloadFormat: ''
                });
            case ActionType.SET_DOWNLOAD_FORMAT:
                return setMapInfo((prevMapInfo) => ({
                    ...prevMapInfo,
                    download: true,
                    downloadFormat: payload
                }));
            case ActionType.CANCEL_DOWNLOAD:
                return setMapInfo((prevMapInfo) => ({
                    ...prevMapInfo,
                    download: false,
                    downloadFormat: ''
                }));
            default:
                return mapInfo;
        }
    }

    mapInfo.setTitle = (title) => {
        reducer({
            type: ActionType.SET_MAP_TITLE,
            payload: title
        })
    }

    mapInfo.setFileFormat = (fileFormat) => {
        reducer({
            type: ActionType.SET_FILE_FORMAT,
            payload: fileFormat
        })
    }

    mapInfo.setMap = (map) => {
        reducer({
            type: ActionType.SET_MAP,
            payload: map
        })
    }

    mapInfo.reset = () => {
        reducer({
            type: ActionType.RESET,
            payload: null
        })
    }

    mapInfo.cancelDownload = () => {
        reducer({
            type: ActionType.CANCEL_DOWNLOAD,
            payload: null
        })
    }

    mapInfo.setDownloadFormat = (downloadFormat) => {
        reducer({
            type: ActionType.SET_DOWNLOAD_FORMAT,
            payload: downloadFormat
        })
    }

    return (
        <MapContext.Provider value={{ mapInfo }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapContext;