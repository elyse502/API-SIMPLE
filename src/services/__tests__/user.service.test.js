import test from 'ava';

import userService from '../user.service';

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
        name: 'Elysée NIYIBIZI',
        email: 'elyseeniyibizi@email.com',
        city: 'Kigali',
        country: 'RWANDA'
    };
});

test('must add a user', (t) => {
    const expectedId = 1;

    const user = userService.addUser(sampleUser);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...sampleUser });
});

test('must retrieve a user', (t) => {
    const expectedId = 1;

    const user = userService.getUser(1);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...sampleUser });
});

test('must get all users', (t) => {
    const expectedId = 1;

    const user = userService.getAllUsers();

    t.deepEqual(user[0], { id: expectedId, ...sampleUser });
});

test('must update a user', (t) => {
    const userId = 1;

    const updatedDetails = {
        name: 'Clement TUYISHIME',
        email: 'clementtuyishime@email.com',
        city: 'Nyamata',
        country: 'RWANDA'
    };

    const user = userService.updateUser(userId, updatedDetails);

    t.is(user.id, userId);
    t.deepEqual(user, { id: userId, ...updatedDetails });
});

test('must delete a user', (t) => {
    const userId = 1;

    const expected = userService.removeUser(userId);

    t.is(expected, undefined);

    // Trying to retrieve a removed user, and expect to be "undefined"
    const user = userService.getUser(userId);
    t.is(user, undefined);
});