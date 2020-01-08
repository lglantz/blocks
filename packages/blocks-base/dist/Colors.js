"use strict";var variablesJson=require("../variables.json"),isIE="undefined"!=typeof window&&window.navigator.userAgent.match(/(MSIE|Trident)/);function getColorValue(o){var r=variablesJson[o+"-hex"];if(isIE)return r;var l=o.split("-"),e=variablesJson[l[0]];return 1<l.length&&(e=e[l[1]]),e.replace(new RegExp(/\$(.*)hex/,"gm"),r)}var Colors={};Colors.BRAND_00=getColorValue("brand-00"),Colors.BRAND_01=getColorValue("brand-01"),Colors.PRIMARY_00=getColorValue("primary-00"),Colors.PRIMARY_01=getColorValue("primary-01"),Colors.PRIMARY_02=getColorValue("primary-02"),Colors.PRIMARY_03=getColorValue("primary-03"),Colors.SECONDARY_00=getColorValue("secondary-00"),Colors.SECONDARY_01=getColorValue("secondary-01"),Colors.SECONDARY_02=getColorValue("secondary-02"),Colors.SECONDARY_03=getColorValue("secondary-03"),Colors.LIGHT_00=getColorValue("light-00"),Colors.LIGHT_01=getColorValue("light-01"),Colors.LIGHT_02=getColorValue("light-02"),Colors.DARK_00=getColorValue("dark-00"),Colors.DARK_01=getColorValue("dark-01"),Colors.DARK_02=getColorValue("dark-02"),Colors.DARK_03=getColorValue("dark-03"),Colors.DANGER_00=getColorValue("danger-00"),Colors.DANGER_01=getColorValue("danger-01"),Colors.DANGER_02=getColorValue("danger-02"),Colors.DANGER_03=getColorValue("danger-03"),Colors.WARNING=getColorValue("warning"),Colors.SUCCESS=getColorValue("success"),Colors.INFORMATION=getColorValue("information"),Colors.FOCUS=getColorValue("focus"),Colors.SHADOW=getColorValue("shadow"),module.exports=Colors;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbG9ycy5qcyJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNKc29uIiwicmVxdWlyZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiaXNJRSIsImhleFZhbHVlIiwibmFtZSIsInBpZWNlcyIsInNwbGl0IiwiY29sb3IiLCJDb2xvcnMiLCJnZXRDb2xvclZhbHVlIiwiQlJBTkRfMDEiLCJQUklNQVJZXzAxIiwiUFJJTUFSWV8wMCIsIlBSSU1BUllfMDMiLCJTRUNPTkRBUllfMDEiLCJTRUNPTkRBUllfMDAiLCJTRUNPTkRBUllfMDMiLCJMSUdIVF8wMSIsIkxJR0hUXzAwIiwiTElHSFRfMDIiLCJEQVJLXzAxIiwiREFSS18wMCIsIkRBUktfMDMiLCJEQU5HRVJfMDEiLCJEQU5HRVJfMDAiLCJEQU5HRVJfMDMiLCJTVUNDRVNTIiwiV0FSTklORyIsIklORk9STUFUSU9OIiwiU0hBRE9XIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxjQUFnQkMsUUFBUSxxQkFBeEJELEtBQXdCLG9CQUFSQyxRQUFBQyxPQUF0QkMsVUFBQUMsVUFBQUMsTUFBQSxrQkFFQSxTQUFNQyxjQUFlSixHQUduQixJQUFNSyxFQUFXUCxjQUFpQlEsRUFBakIsUUFEbkIsR0FBQUYsS0FDRSxPQUFNQyxFQUVKLElBQUFFLEVBQU9GLEVBQVBHLE1BQUEsS0FDREMsRUFBQVgsY0FBQVMsRUFBQSxJQUVELE9BRG9CQyxFQUFkRCxFQUFBQSxTQUFTRSxFQUFmQSxFQUFBRixFQUFBLEtBQ0lFLEVBQVFYLFFBQUFBLElBQUFBLE9BQWNTLFlBQTFCLE1BQUFGLEdBT0YsSUFBQUssT0FBQSxHQUVBQSxPQUFNQSxTQUFOQyxjQUFBLFlBR0FELE9BQU9FLFNBQVdELGNBQWMsWUFBaENELE9BQU9FLFdBQVdELGNBQWMsY0FHaENELE9BQU9HLFdBQWFGLGNBQWMsY0FEbENELE9BQU9JLFdBQWFILGNBQWMsY0FDbENELE9BQU9HLFdBQWFGLGNBQWMsY0FFbENELE9BQU9LLGFBQWFKLGNBQWMsZ0JBR2xDRCxPQUFPTSxhQUFlTCxjQUFjLGdCQURwQ0QsT0FBT08sYUFBZU4sY0FBYyxnQkFDcENELE9BQU9NLGFBQWVMLGNBQWMsZ0JBRXBDRCxPQUFPUSxTQUFBQSxjQUFlUCxZQUd0QkQsT0FBT1MsU0FBV1IsY0FBYyxZQURoQ0QsT0FBT1UsU0FBV1QsY0FBYyxZQUVoQ0QsT0FBT1csUUFBUFYsY0FBa0JBLFdBR2xCRCxPQUFPWSxRQUFVWCxjQUFjLFdBRC9CRCxPQUFPYSxRQUFVWixjQUFjLFdBQy9CRCxPQUFPWSxRQUFVWCxjQUFjLFdBRS9CRCxPQUFPYyxVQUFVYixjQUFjLGFBRy9CRCxPQUFPZSxVQUFZZCxjQUFjLGFBRGpDRCxPQUFPZ0IsVUFBWWYsY0FBYyxhQUNqQ0QsT0FBT2UsVUFBWWQsY0FBYyxhQUVqQ0QsT0FBT2lCLFFBQVBoQixjQUFtQkEsV0FHbkJELE9BQU9rQixRQUFVakIsY0FBYyxXQUQvQkQsT0FBT21CLFlBQVVsQixjQUFjLGVBQy9CRCxPQUFPa0IsTUFBUGpCLGNBQWlCQSxTQUNqQkQsT0FBT29CLE9BQUFBLGNBQWNuQixVQUVyQkQsT0FBT3FCLFFBQVNwQiIsImZpbGUiOiJDb2xvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YXJpYWJsZXNKc29uID0gcmVxdWlyZSgnLi4vdmFyaWFibGVzLmpzb24nKTtcblxuY29uc3QgaXNJRSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKSA6IGZhbHNlO1xuXG5mdW5jdGlvbiBnZXRDb2xvclZhbHVlKG5hbWUpIHtcbiAgY29uc3QgaGV4VmFsdWUgPSB2YXJpYWJsZXNKc29uW2Ake25hbWV9LWhleGBdO1xuICBpZiAoaXNJRSkge1xuICAgIHJldHVybiBoZXhWYWx1ZTtcbiAgfVxuICBjb25zdCBwaWVjZXMgPSBuYW1lLnNwbGl0KCctJyk7XG4gIGxldCBjb2xvciA9IHZhcmlhYmxlc0pzb25bcGllY2VzWzBdXTtcbiAgaWYgKHBpZWNlcy5sZW5ndGggPiAxKSBjb2xvciA9IGNvbG9yW3BpZWNlc1sxXV07XG4gIHJldHVybiBjb2xvci5yZXBsYWNlKG5ldyBSZWdFeHAoL1xcJCguKiloZXgvLCAnZ20nKSwgaGV4VmFsdWUpO1xufVxuXG4vLyBDb2xvciBsaXN0IHRoYXQgZW5hYmxlcyB1c2Ugb2YgQmxvY2tzIGNvbG9ycyBmcm9tIEphdmFTY3JpcHQgY29kZVxuLy8gRm9yIGV4YW1wbGUsIHBhc3NpbmcgYSBmaWxsIGNvbG9yIHRvIGEgUmVhY3QgSWNvbiBTVkcgY29tcG9uZW50LlxuLy8gSUUgZG9lc24ndCBsaWtlIGNzcyBjdXN0b20gcHJvcGVydGllcywgc28ganVzdCBwYXNzaW5nICd2YXIoLS1icmFuZC0wMCknXG4vLyBpcyBub3QgaWRlYWwgLSB3ZSB3YW50IHRvIHBhc3MgYSBoZXggdmFsdWUgaW4gdGhhdCBjYXNlLlxuY29uc3QgQ29sb3JzID0ge307XG5cbkNvbG9ycy5CUkFORF8wMCA9IGdldENvbG9yVmFsdWUoJ2JyYW5kLTAwJyk7XG5Db2xvcnMuQlJBTkRfMDEgPSBnZXRDb2xvclZhbHVlKCdicmFuZC0wMScpO1xuXG5Db2xvcnMuUFJJTUFSWV8wMCA9IGdldENvbG9yVmFsdWUoJ3ByaW1hcnktMDAnKTtcbkNvbG9ycy5QUklNQVJZXzAxID0gZ2V0Q29sb3JWYWx1ZSgncHJpbWFyeS0wMScpO1xuQ29sb3JzLlBSSU1BUllfMDIgPSBnZXRDb2xvclZhbHVlKCdwcmltYXJ5LTAyJyk7XG5Db2xvcnMuUFJJTUFSWV8wMyA9IGdldENvbG9yVmFsdWUoJ3ByaW1hcnktMDMnKTtcblxuQ29sb3JzLlNFQ09OREFSWV8wMCA9IGdldENvbG9yVmFsdWUoJ3NlY29uZGFyeS0wMCcpO1xuQ29sb3JzLlNFQ09OREFSWV8wMSA9IGdldENvbG9yVmFsdWUoJ3NlY29uZGFyeS0wMScpO1xuQ29sb3JzLlNFQ09OREFSWV8wMiA9IGdldENvbG9yVmFsdWUoJ3NlY29uZGFyeS0wMicpO1xuQ29sb3JzLlNFQ09OREFSWV8wMyA9IGdldENvbG9yVmFsdWUoJ3NlY29uZGFyeS0wMycpO1xuXG5Db2xvcnMuTElHSFRfMDAgPSBnZXRDb2xvclZhbHVlKCdsaWdodC0wMCcpO1xuQ29sb3JzLkxJR0hUXzAxID0gZ2V0Q29sb3JWYWx1ZSgnbGlnaHQtMDEnKTtcbkNvbG9ycy5MSUdIVF8wMiA9IGdldENvbG9yVmFsdWUoJ2xpZ2h0LTAyJyk7XG5cbkNvbG9ycy5EQVJLXzAwID0gZ2V0Q29sb3JWYWx1ZSgnZGFyay0wMCcpO1xuQ29sb3JzLkRBUktfMDEgPSBnZXRDb2xvclZhbHVlKCdkYXJrLTAxJyk7XG5Db2xvcnMuREFSS18wMiA9IGdldENvbG9yVmFsdWUoJ2RhcmstMDInKTtcbkNvbG9ycy5EQVJLXzAzID0gZ2V0Q29sb3JWYWx1ZSgnZGFyay0wMycpO1xuXG5Db2xvcnMuREFOR0VSXzAwID0gZ2V0Q29sb3JWYWx1ZSgnZGFuZ2VyLTAwJyk7XG5Db2xvcnMuREFOR0VSXzAxID0gZ2V0Q29sb3JWYWx1ZSgnZGFuZ2VyLTAxJyk7XG5Db2xvcnMuREFOR0VSXzAyID0gZ2V0Q29sb3JWYWx1ZSgnZGFuZ2VyLTAyJyk7XG5Db2xvcnMuREFOR0VSXzAzID0gZ2V0Q29sb3JWYWx1ZSgnZGFuZ2VyLTAzJyk7XG5cbkNvbG9ycy5XQVJOSU5HID0gZ2V0Q29sb3JWYWx1ZSgnd2FybmluZycpO1xuQ29sb3JzLlNVQ0NFU1MgPSBnZXRDb2xvclZhbHVlKCdzdWNjZXNzJyk7XG5Db2xvcnMuSU5GT1JNQVRJT04gPSBnZXRDb2xvclZhbHVlKCdpbmZvcm1hdGlvbicpO1xuQ29sb3JzLkZPQ1VTID0gZ2V0Q29sb3JWYWx1ZSgnZm9jdXMnKTtcbkNvbG9ycy5TSEFET1cgPSBnZXRDb2xvclZhbHVlKCdzaGFkb3cnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcnM7XG4iXX0=