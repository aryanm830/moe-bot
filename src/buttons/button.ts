import { ButtonInteraction, Message } from 'discord.js';

import { EventData } from '../models/internal-models';

export interface Button {
    ids: string[];
    deferType: ButtonDeferType;
    requireGuild: boolean;
    requireEmbedAuthorTag: boolean;
    execute(intr: ButtonInteraction, msg: Message, data: EventData): Promise<void>;
}

export enum ButtonDeferType {
    REPLY = 'REPLY',
    UPDATE = 'UPDATE',
    NONE = 'NONE',
}