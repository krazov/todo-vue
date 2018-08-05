import { findIndex } from '../../../src/utils/store.util';

describe('findIndex', () => {
    it('should find index of element in it', () => {
        const array = [
            {
                id: 1,
                task: 'First',
            },
            {
                id: 2,
                task: 'Second',
            },
            {
                id: 3,
                task: 'Third',
            },
        ];

        expect(findIndex(array, 'id', 2)).toBe(1);
    });
});
