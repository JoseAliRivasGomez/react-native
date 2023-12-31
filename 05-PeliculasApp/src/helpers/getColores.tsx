import ImageColors from 'react-native-image-colors';



export const getImageColors = async( uri: string ) => {


    const colors = await ImageColors.getColors(uri, {});

    let primary = '';
    let secondary = '';

    if (colors.platform === 'android') {
        // Access android properties
        primary = colors.dominant || '';
        secondary = colors.average || '';
    }
    else if (colors.platform === 'ios') {
        // Access iOS properties
        // e.g.
        primary = colors.primary;
        secondary = colors.secondary;
    }

    //console.log([primary, secondary]);

    return [primary, secondary];

};
