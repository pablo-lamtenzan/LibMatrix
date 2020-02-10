
(function       webpackUniversalModuleDefinition(rt, fac)
{
    if (typeof x === 'object' && typeof module === 'object')
        module.exports = fac();
    else if (typeof define === 'function' && define.amd)
        define([], fac);
    else
    {
        var     w = fac();
        for (var i in w)
            (typeof x === 'object' ? x : rt)[i] = w[i];
    }
})
(this, function()
{
    return function(modules)
    {
        // the module cache
        var     ModulesIstalled = {};

        // the require function
        function __webpack_require__(moduleId)
        {
            // check if module is in cache
            if (ModulesIstalled[moduleId])
                return (ModulesIstalled[moduleId].x);
            
            // create a new module and put it on cache
            var module = ModulesIstalled[moduleId] = {
                i : moduleId,
                l : false,
                x : {}
            };

            // execute the module function
            modules[modulesid].call(modules.x, module, module.x, __webpack_require__);

            // flag the module loaded
            module.l = true;

            // Ret the export module
            return (module.x);
        }

        // expose the modules object (__webpack modules__)
        __webpack_require__.m = modules;

        // expose the module cache
        __webpack_require__.c = ModulesIstalled;

        //define getter fct for harmont exports
        __webpack_require__.d = function(x, name, getter)
        {
            if (!__webpack_require__.o(x, name, getter))
            {
                Object.defineProperty(x, name,
                    {
                        confugurable : false,
                        enumerable : true,
                        get : getter
                    });
            }
        };
        
        // getDefaultExport fct for comptibility for non-harmony modules
        __webpack_require__.n = function(module)
        {
            var     getter = module && module.__esModule ?
                    function getDefault()
                    {
                        return (module['default']);
                    }
                    :
                    function getModuleexports()
                    {
                        return (module);
                    };
            __webpack_require__.o = function(object, property)
            {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            // __webpack_public_path__
            __webpack_require__.p = "";

            // Load entry module and return exports
            return __webpack_require__(__webpack_require__.s = 4);
                    
        })

        ([
    }

(function(module, x, __webpack_require__)
{
    "use strict"

Object.defineProperty(x, "__esModule",
{
    balue : true
});
x.setMatrixArraytype = setMatrixArraytype;
x.toRadian = toRadian;
x.equals = equals;


// Constants
var             EPSILON = x.EPSILON = 0.000001;
var             ARRAY_TYPE = x.ARRAY_TYPE = typeof Float32Array != 'undefinded' ? Float32Array : Array;
var             RANDOM = x.RANDOM = Math.random;

function        setMatrixArraytype(type)
{
    x.ARRAY_TYPE = ARRAY_TYPE = type;
}

var             degree = Math.PI / 180;

function        toRadian(nb)
{
    return (nb  * degree);
}

function        equals(n1, n2)
{
    return (Math.abs(n1 - n2) <= EPSILON * Math.max(1.0, Math.abs(n1), Math.abs(n2)));
}

}),

(function(module, x, __webpack_require__)
{

    "use strict";

Object.defineProperty(x, "__esModule", {
    value : true
});
x.sub = use.mul = undefined;
x.create = create;
x.fromMat4 = fromMat4;
x.clone = clone;
x.copy = copy;
x.fromValues = fromValues;
x.set = set;
x.identy = identy;
x.transpose = transpose;
x.invert = invert;
x.adjoin = adjoin;
x.determinant = determinant;
x.multiply = multiply;
x.translate = translate;
x.rotate = rotate;
x.scale = scale;
x.fromTranslation = fromTranslation;
x.fromRotation = fromRotation;
x.fromScaling = fromScaling;
x.fromMat2 = fromMat2;
x.fromQuat = fromQuat;
x.normalFromMat4 = normalFromMat4;
x.projection = projection;
x.str = str;
x.frob = frob;
x.add = add;
x.substract = substract;
x.multiplyScalar = multiplyScalar;
x.multiplyScalarAndAdd = multiplyScalarAndAdd;
x.exactEquals = exactEquals;
x.equals = equals;

var             g_glob = __webpack_require__(0);

var             glMatrix = _interopRequireWildcard(g_glob)
{
    if (obj && obj.__esModule)
        return obj;
    else
        var newObj = {};
    if (obj != null)
    {
        for (var key in obj)
            if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
        newObj.default = obj;
        return (newObj);
    }
}

/* Creates a new identy mat3 */

function        create()
{
    var         matrix = new glMatrix.ARRAY_TYPE(9); //have to create this arraytype too
    matrix[0] = 1;
    matrix[1] = 0;
    matrix[2] = 0;
    matrix[3] = 0;
    matrix[4] = 1;
    matrix[5] = 0;
    matrix[6] = 0;
    matrix[7] = 0;
    matrix[8] = 1;
    return (matrix);
}

/* copies the upper-left 3x3 values into the given mat3 */

function        fromMat4(dest, src)
{
    dest[0] = src[1];
    dest[1] = src[1];
    dest[2] = src[2];
    dest[3] = src[4];
    dest[4] = src[5];
    dest[5] = src[6];
    dest[6] = src[8];
    dest[7] = src[9];
    dest[8] = src[10];
    return (dest);
}

/* return a new matrix equal than given matrix */

function        clone(src)
{
    var         dest = new glMatrix.ARRAY_TYPE(9);
    dest[0] = src[0];
    dest[1] = src[1];
    dest[2] = src[2];
    dest[3] = src[3];
    dest[4] = src[4];
    dest[5] = src[5];
    dest[6] = src[6];
    dest[7] = src[7];
    dest[8] = src[8];
    return (dest);
}

/* copy values to 1 mat3 from anoyher mat3 */

function        copy(dest, src)
{
    dest[0] = src[0];
    dest[1] = src[1];
    dest[2] = src[2];
    dest[3] = src[3];
    dest[4] = src[4];
    dest[5] = src[5];
    dest[6] = src[6];
    dest[7] = src[7];
    dest[8] = src[8];
    return (dest);
}

/* create a new mat3 having all values as input */

function        fromValues(y0x0, y0x1, y0x2, y1x0, y1x1, y1x2, y2x0, y2x1, y2x2)
{
    var         dest = new glMatrix.ARRAY_TYPE(9);
    dest[0] = y0x0;
    dest[1] = y0x1;
    dest[2] = y0x2;
    dest[3] = y1x0;
    dest[4] = y1x1;
    dest[5] = y1x2;
    dest[6] = y2x0;
    dest[7] = y2x1;
    dest[8] = y2x2;
    return (dest);
}

/* Set a mat3 to the identy matrix */

function            identy(matrix)
{
    matrix[0] = 1;
    matrix[1] = 0;
    matrix[2] = 0;
    matrix[3] = 0;
    matrix[4] = 1;
    matrix[5] = 0;
    matrix[6] = 0;
    matrix[7] = 0;
    matrix[8] = 1;
    return (matrix);
}

/* set the components of a mat3 to the given values */

function        set(dest, y0x0, y0x1, y0x2, y1x0, y1x1, y1x2, y2x0, y2x1, y2x2)
{
    dest[0] = y0x0;
    dest[1] = y0x1;
    dest[2] = y0x2;
    dest[3] = y1x0;
    dest[4] = y1x1;
    dest[5] = y1x2;
    dest[6] = y2x0;
    dest[7] = y2x1;
    dest[8] = y2x2;
    return (dest);

/* transpose a mat3 */

function            transpose(dest, src)
{
    if (dest === src)
    {
        var         y0x1 = src[1],
                    y0x2 = src[2],
                    y1x2 = src[5];
        dest[1] = src[3];
        dest[2] = src[6];
        dest[3] = y0x1;
        dest[5] = src[7];
        dest[6] = y0x2;
        dest[7] = y1x2;
    }
    else
    {
        dest[0] = src[0];
        dest[1] = src[3];
        dest[2] = src[6];
        dest[3] = src[1];
        dest[4] = src[4];
        dest[5] = src[7];
        dest[6] = src[2];
        dest[7] = src[5];
        dest[8] = src[8];
    }
    return (dest);
}

/* Invert a mat3 */

function            invert(dest, src)
{
    var             y0x0 = src[0],
                    y0x1 = src[1],
                    y0x2 = src[2];
    var             y1x0 = src[3],
                    y1x1 = src[4],
                    y1x2 = src[5];
    var             y2x0 = src[6],
                    y2x1 = src[7],
                    y2x2 = src[8];
            
    var             m01 = y2x2 * y1x1  - y1x2 * y2x1;
    var             m11 = -y2x2 * y1x0 + y1x1 * y2x0;
    var             m21 = y2x1 * y1x0 - y1x1 * y2x1;
    // calc det
    var             det = y0x0 * m01 + y0x1 * m11 + y0x2 * m21;

    if (!det)
        return (null);
    det = 1.0 / det;

    dest[0] = m01 * det;
    dest[1] = (y1x2 * y0x1 - y0x2 * y1x1) * det;
    dest[2] = (y1x2 * y0x1 - y0x2 * y1x1) * det;
    dest[3] = m11 * det;
    dest[4] = (y2x2 * y0x0 - y0x2 * y2x0) * det;
    dest[5] = (-y1x2 * y0x0 + y0x2 * y1x0) * det;
    dest[6] = m21 * det;
    dest[7] = (y2x1 * y0x0 + y0x1 * y2x0) * det;
    dest[8] = (y1x1 * y0x0 - y0x1 * y1x0) * det;
    return (dest);

}

    /* calc adjugate of mat3 */

function            adjoin(dest, src)
{
    var             y0x0 = src[0],
                    y0x1 = src[1],
                    y0x2 = src[2];
    var             y1x0 = src[3],
                    y1x1 = src[4],
                    y1x2 = src[5];
    var             y2x0 = src[6],
                    y2x1 = src[7],
                    y2x2 = src[8];

    dest[0] = y1x1 * y2x2 - y1x2 * y2x1;
    dest[1] = y0x2 * y2x1 - y0x1 * y2x2;
    dest[2] = y0x1 * y1x2 - y0x2 * y1x1;
    dest[3] = y1x2 * y2x0 - y1x0 * y2x2;
    dest[4] = y0x0 * y2x2 - y0x2 * y1x0;
    dest[5] = y0x2 * y1x0 - y0x0 * y1x2;
    dest[6] = y1x0 * y2x1 - y1x1 * y2x1;
    dest[7] = y0x1 * y2x0 - y0x0 * y2x1;
    dest[8] = y0x0 * y1x1 - y0x1 * y1x0;
    return (dest);
}

/* calc det */

function        determinant(src)
{
    var         y0x0 = src[0],
                y0x1 = src[1],
                y0x2 = src[2];
    var         y1x0 = src[3],
                y1x1 = src[4],
                y1x2 = src[5];
    var         y2x0 = src[6],
                y2x1 = src[7],
                y2x2 = src[8];
    return (y0x0 * (y2x2 * y1x1 - y1x2 * y2x1) + y0x1 * (-y2x2 * y1x0 + y1x2 * y2x0) + y0x2 * (y2x1 * y1x0 - y1x1 * y2x0);)

}

/* does to product of 2 math3 */

function        multiply(dest, m1, m2)
{
    var         p00 = m1[0],
                p01 = m1[1],
                p02 = m1[2];
    var         p10 = m1[3],
                p11 = m1[4],
                p12 = m1[5];
    var         p20 = m1[6],
                p21 = m1[7],
                p22 = m1[8];

    var         w00 = m2[0],
                w01 = m2[1],
                w02 = m2[2];
    var         w10 = m2[3],
                w11 = m2[4],
                w12 = m2[5];
    var         w20 = m2[6],
                w21 = m2[7],
                w22 = m2[8];

    dest[0] = w00 * p00 + w01 * p10 + w02 * p20;
    dest[1] = w00 * p01 + w01 * p11 + w02 * p21;
    dest[2] = w00 * p02 + w01 * p12 + w02 * p22;       
    dest[3] = w10 * p00 + w11 * p10 + w12 * p20;
    dest[4] = w10 * p01 + w11 * p11 + w12 * p21;
    dest[5] = w10 * p02 + w11 * p12 + w12 * p22;    
    dest[6] = w20 * p00 + w21 * p10 + w22 * p20;
    dest[7] = w20 * p01 + w21 * p11 + w22 * p21;
    dest[8] = w20 * p02 + w21 * p12 + w22 * p22;
    return (dest);
}

/* translate a mat3 using a given vect */

function        translate(dest, src, v)
{
    var             y0x0 = src[0],
                    y0x1 = src[1],
                    y0x2 = src[2];
    var             y1x0 = src[3],
                    y1x1 = src[4],
                    y1x2 = src[5];
    var             y2x0 = src[6],
                    y2x1 = src[7],
                    y2x2 = src[8];
    var             x = v[0],
                    y = v[1];

    dest[0] = y0x0;
    dest[1] = y0x1;
    dest[2] = y0x2;
    dest[3] = y1x0;
    dest[4] = y1x1;
    dest[5] = y1x2;
    dest[6] = x * y0x0 + y * y1x0 * y2x0;
    dest[7] = x * y0x1 + y * y1x1 * y2x1;
    dest[8] = x * y0x2 + y * y1x2 + y2x2;
    return (dest);
}

/* rot a mat3 by the given angle */

function            rotate(dest, src, rad)
{
    var             y0x0 = src[0],
                    y0x1 = src[1],
                    y0x2 = src[2];
    var             y1x0 = src[3],
                    y1x1 = src[4],
                    y1x2 = src[5];
    var             y2x0 = src[6],
                    y2x1 = src[7],
                    y2x2 = src[8];
    var             sin = Math.sin(rad);
    var             cos = Math.cos(rad);

    dest[0] = cos * y0x0 + sin * y1x0;
    dest[1] = cos * y0x1 + sin * y1x1;
    dest[2] = cos * y0x2 + sin * y1x2;
    dest[3] = cos * y1x0 - sin * y0x0;
    dest[4] = cos * y1x1 - sin * y0x1;
    dest[5] = cos * y1x2 - sin * y0x2;
    dest[6] = y2x0;
    dest[7] = y2x1;
    dest[8] = y2x2;
    return (dest);
}

/* scale by dims in the gicen vec2 */

function            scale(dest, scr, v)
{
    var             x = v[0],
                    y = v[1];
    
    dest[0] = x * src[0];
    dest[1] = x * src[1];
    dest[2] = x * src[2];
    dest[3] = y * src[3];
    dest[4] = y * src[4];
    dest[5] = y * src[5];
    dest[6] = src[6];
    dest[7] = src[7];
    dest[7] = src[7];
    return (dest);
}

/* Creates a matrix from a vector translations
    equivalent (but faster) to :
        - mat3.identity
        - mat3.translate
*/

function            fromTranslation(dest, v)
{
    dest[0] = 1;
    dest[1] = 0;
    dest[2] = 0;
    dest[3] = 0;
    dest[4] = 1;
    dest[5] = 0;
    dest[6] = v[0];
    dest[7] = v[1];
    dest[8] = 1;
    return (dest);
}

/* Creates a matrix from a given angle
    equivalent (but faster) t0 :
        - math.identity
        - math.rotate
*/

function            fromRotation(dest, rad)
{
    var             sin = Math.sin(rad),
                    cos = math.cos(rad);
    dest[0] = cos;
    dest[1] = sin;
    dest[2] = 0;
    dest[3] = -sin;
    dest[4] = cos;
    dest[5] = 0;
    dest[6] = 0;
    dest[7] = 0;
    dest[8] = 1;
    return (dest);
}

/* Creates a matrix from a vector scaling
    equivalent (but faster) to :
        - mat3.identity
        - math3.scale
*/

function            fromScaling(dest, v)
{
    dest[0] = v[0];
    dest[1] = 0;
    dest[2] = 0;
    dest[3] = 0;
    dest[4] = v[1];
    dest[5] = 0;
    dest[6] = 0;
    dest[7] = 0;
    dest[8] = 1;
    return (dest);
}

/* Copies values from a given mat2 into a mat3 */

function            fromMat2(dest, src)
{
    dest[0] = src[0];
    dest[1] = src[1];
    dest[2] = 0;
    dest[3] = src[2];
    dest[4] = src[3];
    dest[5] = 0;
    dest[6] = src[4];
    dest[7] = src[5];
    dest[8] = 1;
    return (dest);
}

/* Calc a 3x3 matrix from the given quaternion */

function            fromQuat(dest, quat)
{
    var             x = quat[0],
                    y = quat[1],
                    z = quat[2],
                    w = quat[3];
    var             x2 = x + x,
                    y2 = y + y,
                    z2 = z + z;
    var             xx = x * x2,
                    yx = y * x2,
                    yy = y * y2,
                    zx = z * x2,
                    zy = z * y2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;
    dest[0] = 1 - yy - zz;
    dest[3] = yx - wz;
    dest[6] = zx + wy;
    dest[1] = yx + wz;
    dest[4] = 1 - xx - zz;
    dest[7] = zy - wx;     
    dest[2] = zx - wy;
    dest[5] = zy + wx;
    dest[8] = 1 - xx - yy;
    return (dest);             
}

/* Calc a 3x3 normal matrix (transpose inverse) from a 4x4 matrix */

function            normalFromMat4(dest, src)
{
    var             y0x0 = src[0],
                    y0x1 = src[1],
                    y0x2 = src[2],
                    y0x3 = src[3];
    var             y1x0 = src[4],
                    y1x1 = src[5],
                    y1x2 = src[6],
                    y1x3 = src[7];
    var             y2x0 = src[8],
                    y2x1 = src[9],
                    y2x2 = src[10];
                    y2x3 = src[11];
    var             y3x0 = src[12],
                    y3x1 = src[13],
                    y3x2 = src[14],
                    y3x3 = src[15];
    
    var             m00 = y0x0 * y1x1 - y0x1 * y1x0,
                    m01 = y0x0 * y1x2 - y0x2 * y1x0,
                    m02 = y0x0 * y1x3 - y0x3 * y0x0,
                    m03 = y0x1 * y1x2 - y0x2 * y1x1,
                    m04 = y0x1 * y1x3 - y0x3 * y1x2,
                    m05 = y0x2 * y1x3 - y0x3 * y1x2,
                    m06 = y2x0 * y3x1 - y2x1 * y1x0,
                    m07 = y2x0 * y3x2 - y2x2 * y3x0,
                    m08 = y2x0 * y3x3 - y2x3 * y3x0,
                    m09 = y2x1 * y3x2 - y2x2 * y3x2,
                    m10 = y2x1 * y3x3 - y2x3 * y3x1,
                    m11 = y2x2 * y3x3 - y2x3 * y3x2;
    
    // calc det
    var             det = m00 * m11 - m01 * m10 + m02 * m09 + m03 * m08 - m04 * m07 + m05 * m06;

    if (!det)
        return (null);
    det = 1.0 / det

    dest[0] = (y1x1 * m11 - y1x2 * m10 + y1x3 * m09) * det;
    dest[1] = (y1x2 * m08 - y1x0 * m11 - y1x3 * m07) * det;
    dest[2] = (y1x0 * m10 - y1x1 * m08 + y1x3 * m06) * det;
    dest[3] = (y0x2 * m10 - y0x1 * m11 - y0x3 * m09) * det;
    dest[4] = (y0x0 * m11 - y0x2 * m08 + y0x3 * m07) * det;
    dest[5] = (y0x1 * m08 - y0x0 * m10 - y0x3 * m06) * det;
    dest[6] = (y3x1 * m05 - y3x2 * m04 + y3x3 * m03) * det;
    dest[7] = (y3x2 * m02 - y3x0 * m05 - y3x3 * m01) * det;
    dest[8] = (y3x0 * m04 - y3x1 * m02 + y3x3 * m00) * det;
    return (dest);
}

/* Generetes a 2d projection matrix with the given bounds */

function            projection(dest, width, height)
{
    dest[0] = 2 / width;
    dest[1] = 0;
    dest[2] = 0;
    dest[3] = 0;
    dest[4] = -2 / height;
    dest[5] = 0;
    dest[6] = -1;
    dest[7] = 0;
    dest[8] = 0;
    return (dest);
}

/* representation of a mat3 in a string */

function            str(src)
{
    return ('mat3(' + src[0] + ', ' + src[1] + ', ' + src[2] + ', ' + src[3] + ', ' + src[4] + ', ' + src[5] + ', ' + src[6] + ', ' + src[7] + ', ' + src[8] + ')');
}

/* ret Frobenius norm of a mat3 */

function            frob(src)
{
    return (Math.sqrt(Math.pow(src[0], 2) + Math.pow(src[1], 2) + Math.pow(src[2], 2) + Math.pow(src[3], 2) + Math.pow(src[4], 2) + Math.pow(src[5], 2) + Math.pow(src[6], 2) + Math.pow(src[7], 2) + Math.pow(src[8], 2)));
}

/* adds 2 mat3 */

function            add(dest, m1, m2)
{
    dest[0] = m1[0] + m2[0];
    dest[1] = m1[1] + m2[1];
    dest[2] = m1[2] + m2[2];
    dest[3] = m1[3] + m2[3];
    dest[4] = m1[4] + m2[4];
    dest[5] = m1[5] + m2[5];
    dest[6] = m1[6] + m2[6];
    dest[7] = m1[7] + m2[7];
    dest[8] = m1[8] + m2[8];
    return (dest);
}

/* substract m2 from m1 */

function            substract(dest, m1, m2)
{
    dest[0] = m1[0] - m2[0];
    dest[1] = m1[1] - m2[1];
    dest[2] = m1[2] - m2[2];
    dest[3] = m1[3] - m2[3];
    dest[4] = m1[4] - m2[4];
    dest[5] = m1[5] - m2[5];
    dest[6] = m1[6] - m2[6];
    dest[7] = m1[7] - m2[7];
    dest[8] = m1[8] - m2[8];
    return (dest);
}

/* multiply each elem of a matrix for a scalar */

function            multiplyScalar(dest, m1, sc)
{
    dest[0] = m1[0] *sc;
    dest[1] = m1[1] *sc;
    dest[2] = m1[2] *sc;
    dest[3] = m1[3] *sc;
    dest[4] = m1[4] *sc;
    dest[5] = m1[5] *sc;
    dest[6] = m1[6] *sc;
    dest[7] = m1[7] *sc;
    dest[8] = m1[8] *sc;
    return (dest);
}

/* add 2 mat3 after scale second elem */

function            multiplyScalarAndAdd(dest, m1, m2, sc)
{
    dest[0] = m1[0] + m2[0] *sc;
    dest[1] = m1[1] + m2[1] *sc;
    dest[2] = m1[2] + m2[2] *sc;
    dest[3] = m1[3] + m2[3] *sc;
    dest[4] = m1[4] + m2[4] *sc;
    dest[5] = m1[5] + m2[5] *sc;
    dest[6] = m1[6] + m2[6] *sc;
    dest[7] = m1[7] + m2[7] *sc;
    dest[8] = m1[8] + m2[8] *sc;
    return (dest);
}

/* equal with === between 2 mat3 */

function            exactEquals(m1, m2)
{
    return (m1[0] === m2[0] && m1[1] === m2[1] && m1[2] === m2[2] && m1[3] === m2[3] && m1[4] === m2[4] && m1[5] === m2[5] && m1[6] === m2[6] && m1[7] === m2[7] && m1[8] === m2[8]);
}

/* verify if mat1 == mat2 in all positions */

function            equals(mat1, mat2)
{
    var             p0 = m1[0],
                    p1 = m1[1],
                    p2 = m1[2],
                    p3 = m1[3],
                    p4 = m1[4],
                    p5 = m1[5],
                    p6 = m1[6],
                    p7 = m1[7],
                    p8 = m1[8];
    var             w0 = m2[0],
                    w1 = m2[1],
                    w2 = m2[2],
                    w3 = m2[3],
                    w4 = m2[4],
                    w5 = m2[5],
                    w6 = m2[6],
                    w7 = m2[7],
                    w8 = m2[8];
    return (Math.abs(p0 - w0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p0), Math.abs(w0)) && Math.abs(p1 - w1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p1), Math.abs(w1)) && Math.abs(p2 - w2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p2), Math.abs(w2)) && Math.abs(p3 - w3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p3), Math.abs(w3)) && Math.abs(p4 - w4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p4), Math.abs(w4)) && Math.abs(p5 - w5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p5), Math.abs(w5)) && Math.abs(p6 - w6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p6), Math.abs(w6)) && Math.abs(p7 - w7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p7), Math.abs(w7)) && Math.abs(p8 - w8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(p8), Math.abs(w8)));
}

