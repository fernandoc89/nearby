

import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { Step } from "../step";
import { s } from "./styles";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step
                icon={IconMapPin}
                title="Encontre estabbelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Step
                icon={IconQrcode}
                title="Ative seu cupom"
                description="Escaneie o código no estabelecimento para usar o benefício"
            />
            <Step
                icon={IconTicket}
                title="Garanta as vantagens perto de você"
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
            />
        </View>
    )
}