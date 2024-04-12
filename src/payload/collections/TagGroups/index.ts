import { CollectionConfig } from 'payload/types';
import { addCreatedBy } from '../../hooks/add-created-by.hook';
import { addLocale } from '../../hooks/add-locale.hook';
import { addId } from '../../hooks/add-id.hook';

export const TagGroups: CollectionConfig = {
    slug: 'tag-groups',
    admin: {
        useAsTitle: 'name',
        defaultColumns: [
            'name',
            'slug',
            'is_active',
            'created_at',
            'created_by',
        ],
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'is_active',
            label: 'Is Active',
            type: 'checkbox',
            defaultValue: true,
        },
        {
            name: 'uuid',
            label: 'uuid',
            type: 'text',
            access: {
                create: () => false,
                update: () => false,
            },
        },
        {
            name: 'locale',
            label: 'Locale',
            type: 'text',
            access: {
                create: () => false,
                update: () => false,
            },
        },
        {
            name: 'created_by',
            label: 'Created By',
            type: 'relationship',
            relationTo: 'users',
            access: {
                create: () => false,
                update: () => false,
            },
        },
    ],
    hooks: {
        beforeChange: [addCreatedBy, addLocale, addId],
    },
};
