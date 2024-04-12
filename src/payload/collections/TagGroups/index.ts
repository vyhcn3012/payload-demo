import { CollectionConfig } from 'payload/types';
import { addCreatedBy } from '../../hooks/add-created-by.hook';

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
            localized: true,
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
        beforeChange: [addCreatedBy],
    },
};
