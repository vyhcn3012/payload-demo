import { CollectionConfig } from 'payload/types';
import { addCreatedBy } from '../../hooks/add-created-by.hook';

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'tag_group', 'created_by'],
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
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
            name: 'tag_group',
            label: 'Tag Group',
            type: 'relationship',
            relationTo: 'tag-groups',
            required: true,
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
        beforeRead: [],
    },
};
