# Bitwise

1. Bitwise operator treat their operands as a sequence of 32 bits of zeros and ones.

   ```javascript
   // 5 => 101 in binary
   // but was treated as 00000000000000000000000000000101
   ```

2. Bitwise __AND__ (a __&__ b) : return __1__ in each bit position if both two corresponding bits are __1__s

   ```javascript
   // 15 & 32 
   //15 => 00000000000000000000000000001111
   //32 => 00000000000000000000000000100000
   // & == 00000000000000000000000000000000 => 0
   15 & 32 === 0
   ```

3. Bitwise __OR__ (a __|__ b) : return a __1__ in each bit position if either two bits are 1.

   ```javascript
   // 24 | 17
   //24 => 00000000000000000000000000011000
   //17 => 00000000000000000000000000010001
   // | => 00000000000000000000000000011001 => 25
   24 | 17 === 25
   ```

4. Bitwise __XOR__ (a __^__ b) : return 1 in each bit position if either but not both corresponding bits are 1:

   ```javascript
   //62 ^ 49
   //62 => 00000000000000000000000000111110
   //49 => 00000000000000000000000000110001
   // & => 00000000000000000000000000001111 => 15
   62 ^ 49 === 15
   ```

5. Bitwise __NOT__( ~ a) : Invert all the bits:

   ```javascript
   // ~127
   //127 => 00000000000000000000000001111111
   // ~  => 11111111111111111111111110000000 -128
   // why is -128
   //128 => 00000000000000000000000010000000 
   // we invert all number before the first left "ONE"
   //-128 => 11111111111111111111111110000000
   ```

   so __NOT__ a __x__ number yields __- ( x + 1)__. For example, ~ -127 yields __126__  and ~ 127 yields __-128__ 