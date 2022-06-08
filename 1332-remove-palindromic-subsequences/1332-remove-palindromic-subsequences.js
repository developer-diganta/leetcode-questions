var removePalindromeSub = function(s) {
    return !s.length ? 0 : s === [...s].reverse().join('') ? 1 : 2
};
